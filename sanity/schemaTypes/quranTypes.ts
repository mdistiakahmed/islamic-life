import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const quran = defineType({
  name: "quran",
  title: "Quran",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "category",
      type: "reference",
      to: { type: "category" },
      title: "Category",
      validation: (Rule) =>
        Rule.required().error("A category must be selected."),
    }),
    {
      name: "lesson",
      type: "number",
    },
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      validation: (Rule) =>
        Rule.max(200).warning("Excerpt should be 200 characters or fewer."),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf"
      },
      description: "Upload a PDF file for this Quran lesson"
    }),
    defineField({
      name: "audioFile",
      title: "Audio File",
      type: "file",
      options: {
        accept: ".mp3"
      },
      description: "Upload an MP3 audio file for this Quran lesson"
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
