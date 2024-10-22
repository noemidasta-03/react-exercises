import Color from "./Color";

export default function Colors({ colors }) {
  return (
    <ul>
      {colors.map(function (color, i) {
        return <Color color={color} key={i} />;
      })}
    </ul>
  );
}
