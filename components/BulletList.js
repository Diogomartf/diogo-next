export const BulletList = ({ children }) => (
  <div className="space-y-2 my-7">{children}</div>
);

export const BulletPoint = ({ children }) => <p className="">• {children}</p>;
