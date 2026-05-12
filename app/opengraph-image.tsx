import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Igor Caramori — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Plus Jakarta Sans — mesma fonte do site, garante consistência visual.
// Carregada em build time (Node runtime).
const fontMedium = fs.readFileSync(
  path.join(process.cwd(), "app/fonts/PlusJakartaSans-Medium.ttf")
);
const fontRegular = fs.readFileSync(
  path.join(process.cwd(), "app/fonts/PlusJakartaSans-Regular.ttf")
);

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F7F7F5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Plus Jakarta Sans",
          gap: 24,
        }}
      >
        {/* Nome — peso e escala que dominam o card */}
        <div
          style={{
            fontSize: 144,
            fontWeight: 500,
            letterSpacing: "-0.035em",
            lineHeight: 1,
            color: "#262626",
          }}
        >
          Igor Caramori
        </div>

        {/* Papel — sem pill, em cinza que acompanha o preto #262626 */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#6B6B6B",
            letterSpacing: "0",
          }}
        >
          Product Designer
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: fontMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "Plus Jakarta Sans",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
