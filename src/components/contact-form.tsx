"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { sendEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("senderEmail", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const result = await sendEmail(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="space-y-2"
        >
          <Label htmlFor="name">Full Name *</Label>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  id="name"
                  placeholder="Your full name"
                  className={
                    fieldState.error
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  }
                />
                {fieldState.error && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-sm text-destructive mt-1"
                  >
                    {fieldState.error.message}
                  </motion.p>
                )}
              </>
            )}
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="space-y-2"
        >
          <Label htmlFor="email">Email Address *</Label>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={
                    fieldState.error
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  }
                />
                {fieldState.error && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-sm text-destructive mt-1"
                  >
                    {fieldState.error.message}
                  </motion.p>
                )}
              </>
            )}
          />
        </motion.div>

        {/* Subject Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="space-y-2 md:col-span-2"
        >
          <Label htmlFor="subject">Subject *</Label>
          <Controller
            name="subject"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  id="subject"
                  placeholder="What's this about?"
                  className={
                    fieldState.error
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  }
                />
                {fieldState.error && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-sm text-destructive mt-1"
                  >
                    {fieldState.error.message}
                  </motion.p>
                )}
              </>
            )}
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="space-y-2 md:col-span-2"
        >
          <Label htmlFor="message">Message *</Label>
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="Tell me about your project, ideas, or questions..."
                  rows={6}
                  className={
                    fieldState.error
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  }
                />
                {fieldState.error && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-sm text-destructive mt-1"
                  >
                    {fieldState.error.message}
                  </motion.p>
                )}
              </>
            )}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
      >
        <Button
          type="submit"
          size="lg"
          className="w-full relative overflow-hidden group"
          disabled={isSubmitting}
        >
          <motion.span
            initial={false}
            animate={{ scale: isSubmitting ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-4 w-4 rounded-full border-2 border-background border-t-transparent"
                />
                Sending...
              </>
            ) : (
              <>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Message
                </motion.span>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Send className="h-4 w-4" />
                </motion.div>
              </>
            )}
          </motion.span>
        </Button>
      </motion.div>
    </motion.form>
  );
}
