import React from "react";

function FirstLine() {
  return <div className="lyrics">ONE</div>;
}
function SecondLine() {
  return (
    <div>
      <div className="lyrics">ONE</div>
      <div className="lyrics">TWO</div>
    </div>
  );
}
function ThirdLine() {
  return (
    <div>
      <div className="lyrics">ONE</div>
      <div className="lyrics">TWO</div>
      <div className="lyrics">THREE</div>
    </div>
  );
}
function FourthLine() {
  return (
    <div>
      <div className="lyrics">ONE</div>
      <div className="lyrics">TWO</div>
      <div className="lyrics">THREE</div>
      <div className="lyrics">FOUR</div>
    </div>
  );
}
function FifthLine() {
  return (
    <div>
      <div className="lyrics">ONE</div>
      <div className="lyrics">TWO</div>
      <div className="lyrics">THREE</div>
      <div className="lyrics">FOUR</div>
      <div className="lyrics">FIVE</div>
    </div>
  );
}

// function FirstLine() {
//     return <div className="lyrics">ONE</div>;
//   }
//   function SecondLine() {
//     return <div className="lyrics">TWO</div>;
//   }
//   function ThirdLine() {
//     return <div className="lyrics">THREE</div>;
//   }
//   function FourthLine() {
//     return <div className="lyrics">FOUR</div>;
//   }
//   function FifthLine() {
//     return <div className="lyrics">FIVE</div>;
//   }

export { FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine };
