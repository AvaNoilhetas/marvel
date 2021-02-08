import React, { useState } from "react";

const Description = props => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = e => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <div>
      <p className="text-dark font-primary leading-4 mt-2">
        {props.description.length > 75 && (
          <>{props.description.substring(0, 75)}</>
        )}
        {readMore && props.description.substring(75, props.description.length)}
        {props.description.length > 75 && (
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
        {props.description.length <= 75 && props.description.substring(0, 75)}
      </p>
    </div>
  );
};

export default Description;
