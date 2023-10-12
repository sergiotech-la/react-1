import { css } from "@emotion/react";

export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article
      css={css`
        display: flex;
        gap: 10px;
        justify-content: space-between;
        margin: 16px;
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
        {isFollowing ? <button>Siguiendo</button> : <button>Seguir</button>}
      </aside>
    </article>
  );
}
