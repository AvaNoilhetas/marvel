import React, { useState } from "react";
import sanitizeHtml from "sanitize-html";

const Description = props => {
  const [readMore, setReadMore] = useState(false);
  let description = sanitizeHtml(props.description, {
    allowedTags: [],
    allowedAttributes: {}
  });

  const handleReadMore = e => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <div>
      <p className="text-dark font-primary leading-4 mt-2">
        {description.length > 75 && <>{description.substring(0, 75)}</>}
        {readMore && description.substring(75, description.length)}
        {description.length > 75 && (
          <>
            {!readMore && <>...</>}
            <div className="text-right">
              <button
                type="button"
                className="border border-dark text-xs bg-yellow mt-2 px-2"
                onClick={e => handleReadMore(e)}
              >
                {readMore ? "lire moins" : "lire plus"}
              </button>
            </div>
          </>
        )}
        {description.length <= 75 && description.substring(0, 75)}
      </p>
    </div>
  );
};

export default Description;
