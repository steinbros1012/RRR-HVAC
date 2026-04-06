/**
 * EchoText — editorial echo-stack headline treatment.
 *
 * Renders the same children multiple times, each layer slightly offset
 * to the upper-left, creating a letterpress / extrusion effect.
 *
 * Usage: wrap any block-level heading content.
 *
 *   <EchoText>
 *     <h1 className="font-clash text-8xl font-bold">FAST HVAC HELP</h1>
 *   </EchoText>
 *
 * The container must be `position: relative` (added here). Enough padding
 * is added so echo layers don't clip. Parent should hide overflow if needed.
 */

interface EchoTextProps {
  children: React.ReactNode;
  /** Number of echo layers behind the foreground. Default: 4. */
  layers?: number;
  /** px offset per layer step. Default: 3 */
  offsetPx?: number;
  /** Echo layer colors, back to front. Length should equal `layers`. */
  echoColors?: string[];
  className?: string;
}

const DEFAULT_ECHO_COLORS = ["#bfbfbf", "#c9c9c9", "#d1d1d1", "#d9d9d9"];

export default function EchoText({
  children,
  layers = 4,
  offsetPx = 3,
  echoColors = DEFAULT_ECHO_COLORS,
  className = "",
}: EchoTextProps) {
  // Echo layers rendered back-to-front, then foreground on top
  const echoLayerCount = Math.min(layers, echoColors.length);

  return (
    <div
      className={`relative ${className}`}
      // Padding accommodates the echo offset so layers don't bleed outside
      style={{ paddingLeft: `${echoLayerCount * offsetPx + 2}px` }}
    >
      {/* Background echo layers — absolutely positioned, pointer-events off */}
      {Array.from({ length: echoLayerCount }, (_, i) => {
        // Layer 0 = furthest back, layer (n-1) = closest to foreground
        const depth = echoLayerCount - i; // 4, 3, 2, 1
        const color = echoColors[i] ?? "#d9d9d9";
        return (
          <div
            key={i}
            aria-hidden="true"
            className="absolute inset-0 select-none pointer-events-none"
            style={{
              color,
              transform: `translate(${-depth * offsetPx}px, ${-depth * offsetPx * 0.6}px)`,
              zIndex: i,
            }}
          >
            {children}
          </div>
        );
      })}

      {/* Foreground — provides layout dimensions, receives interactions */}
      <div
        className="relative"
        style={{ color: "#111111", zIndex: echoLayerCount + 1 }}
      >
        {children}
      </div>
    </div>
  );
}
