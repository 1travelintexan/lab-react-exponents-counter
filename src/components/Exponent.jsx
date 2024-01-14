const Exponent = ({ num, exponent }) => {
  let str = num.toString().repeat(exponent).split("").join(" * ");
  console.log(str);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {str} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};
export default Exponent;
