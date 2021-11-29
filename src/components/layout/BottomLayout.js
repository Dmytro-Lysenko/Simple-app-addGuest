import classes from "./BottomLayout.module.css";
import Footer from "./Footer";

const BottomLayout = (props) => {
  return (
    <div>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default BottomLayout;
