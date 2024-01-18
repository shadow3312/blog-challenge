"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { LoaderIcon } from "lucide-react";
import { apiRoot } from "@/contants";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "The title must contain at least 3 characters.",
  }),
  body: z.string().min(4, {
    message: "The body must contain at least 4 characters.",
  }),
});

export default function PostForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const userId = 1;

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    shouldUnregister: false,
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const { title, body } = data;
    setLoading(true);
    try {
      const response = await fetch(`${apiRoot}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          userId,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "An error occured.",
        });
      }

      setLoading(false);
      const post = await response.json();

      toast({
        title: "Successful",
        description: "Post added successfuly !",
      });
      router.back();
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "An error occurred",
      });
    }
  };

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleSubmit(data);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <h3>New post</h3>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Body"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="dark:text-white" disabled={loading} type="submit">
            {" "}
            {loading && (
              <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
            )}{" "}
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
}
