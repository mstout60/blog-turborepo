"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

type Props = {
  content: string;
  className?: string;
};

const SanitizeContent = (props: Props) => {
  const [cleanHTML, setCleanHTML] = useState("");
  useEffect(() => {
    setCleanHTML(DOMPurify.sanitize(props.content));
  }, [props.content]);

  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
};

export default SanitizeContent;
