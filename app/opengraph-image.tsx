import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dashrobe — Your wardrobe, delivered";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #220e92 0%, #3a1ca8 45%, #220e92 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 56,
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "white",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          DASHROBE
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#FFC100",
            marginTop: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          Your wardrobe, delivered
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
            marginTop: 36,
            fontWeight: 500,
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Local boutiques & brands — at your door in under 60 minutes.
        </div>
      </div>
    ),
    { ...size }
  );
}
