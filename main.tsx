import { renderToString } from "preact-render-to-string";

const classNameBuilder = new Proxy(() => {}, {
  get(first, second) {
    console.log(first, second);
    return (f1, f2) => {
      console.log(f1, f2);
      return "example-class";
    };
  },
});
const element = <div className={classNameBuilder} />;
// const element = <div className="foo" />;
// <div></div>
console.log(renderToString(element));
