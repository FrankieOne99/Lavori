"use client";

import { SnippetEditFormProps } from "@/app/snippets/interfaces/SnippetEditFormProps.model";
import { Editor } from "@monaco-editor/react";

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
      />
    </div>
  );
}
