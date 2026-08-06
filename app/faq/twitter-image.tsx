import { ImageResponse } from "next/og";

export const alt =
  "RNK Rentals car rental FAQs, pricing and booking information";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 82% 18%, rgba(153,27,27,0.92), transparent 31%), linear-gradient(135deg, #080808 0%, #171717 60%, #090909 100%)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: 70,
            display: "flex",
            width: 460,
            height: 460,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.13)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 8,
            top: 170,
            display: "flex",
            width: 265,
            height: 265,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.13)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 22,
            bottom: -58,
            display: "flex",
            fontSize: 230,
            fontWeight: 900,
            letterSpacing: "-18px",
            color: "rgba(255,255,255,0.04)",
          }}
        >
          RNK
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "78%",
            padding: "70px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.70)",
            }}
          >
            <span
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: "999px",
                background: "#dc2626",
              }}
            />
            RNK Rentals · India
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 30,
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-4px",
            }}
          >
            <span>Every journey</span>
            <span style={{ color: "#b91c1c" }}>starts with clarity.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 790,
              fontSize: 24,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.64)",
            }}
          >
            Clear answers about chauffeur-driven rentals, airport transfers,
            luxury vehicles, corporate travel, weddings and VIP movements.
          </div>

          <div
            style={{
              display: "flex",
              gap: 25,
              marginTop: 38,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <span>Since 1969</span>
            <span style={{ color: "#dc2626" }}>•</span>
            <span>Pan-India Mobility</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}