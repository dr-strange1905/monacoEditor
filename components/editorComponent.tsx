"use client"

import React, { useEffect, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import {format} from 'sql-formatter';

interface MonacoEditorProps {
  code: string;
}

export default function MonacoEditor({ code }: MonacoEditorProps){
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    formatCode(code);
  };

  const formatCode = (code: string) => {
    if (editorRef.current) {
      const formattedCode = format(code, {
        language: 'mysql',
         // Specify the desired indentation
      });
      editorRef.current.setValue(formattedCode);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      formatCode(code);
    }
  }, [code]);

  return (
    <Editor
      height="90vh"
      defaultLanguage="sql"
      defaultValue={code}
      onMount={handleEditorDidMount}
      options={{
        automaticLayout: true,
      }}
    />
  );
};







