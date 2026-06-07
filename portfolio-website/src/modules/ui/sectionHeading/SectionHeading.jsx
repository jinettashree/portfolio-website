import "./SectionHeading.css"

const SectionHeading = ({
  title,
  rosehot = false,
}) => {
  return (
    <h3
      className={
        rosehot
          ? "section-heading rosehot"
          : "section-heading"
      }
    >
      {title}
    </h3>
  );
};


export default SectionHeading;