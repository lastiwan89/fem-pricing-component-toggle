export default function Pricing({
  plan,
  price,
  storage,
  users,
  bandwith,
  css,
}) {
  return (
    <div className={`pricing ${plan}`}>
      <p className={`pricing__title ${css}`}>{plan}</p>
      <h2 className={`pricing__price ${css}`}>
        $ <span>{price}</span>
      </h2>
      <hr />
      <p className={`pricing__text ${css}`}>{storage} Storage</p>
      <hr />
      <p className={`pricing__text ${css}`}>{users} Users Allowed</p>
      <hr />
      <p className={`pricing__text ${css}`}>Send up to {bandwith}</p>
      <button className="pricing__button">learn more</button>
    </div>
  );
}
