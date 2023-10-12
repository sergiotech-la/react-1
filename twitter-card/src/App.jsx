import { TwitterFollowCard } from "./TwitterFollowCard";
import { css } from "@emotion/react";

function App() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <TwitterFollowCard
        userName="sergiotech-la"
        name="Sergio Antonio Herrera"
        isFollowing={true}
      />
      <TwitterFollowCard userName="alely.jo" name="Joselyn Alely Anaya" />
    </div>
  );
}

export default App;
