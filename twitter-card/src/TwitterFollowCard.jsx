import { css } from "@emotion/react";
import { useState } from "react";

const notFollower = css`
  all: unset;
  margin-left: 16px;
  border: 0;
  border-radius: 100px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 6px 16px;
  &:hover {
    background-color: #c6c6c6;
    transition: 0.3s ease background-color;
  }
`;

const follower = css`
  all: unset;
  margin-left: 16px;
  border: 1px solid #fff;
  border-radius: 100px;
  background-color: #010101;
  color: #fff;
  cursor: pointer;
  padding: 6px 16px;
  &:hover {
    background-color: #c6c6c6;
    color: #000;
    transition: 0.3s ease background-color;
  }
`;

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  const buttonText = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing ? follower : notFollower;
  return (
    <article
      css={css`
        display: flex;
        gap: 10px;
        justify-content: space-between;
      `}
    >
      <header
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <img
          css={css`
            width: 64px;
            border-radius: 100px;
          `}
          src={`https://unavatar.io/${userName}`}
          alt={`${name}'s avatar`}
        />
        <div
          css={css`
            color: #fff;
          `}
        >
          <strong>{name}</strong>
          <br />
          <span
            css={css`
              color: #c6c6c6;
            `}
          >
            {`@${userName}`}
          </span>
        </div>
      </header>
      <aside>
        <button css={buttonClassName} onClick={handleClick}>
          {buttonText}
        </button>
      </aside>
    </article>
  );
}
