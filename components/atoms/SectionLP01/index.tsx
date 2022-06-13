interface Props {
  children: React.ReactNode;
  className?: string;
}
const SectionLP01: React.FC<Props> = (props) => {
  return (
    <section className={`w-full px-6 md:px-[50px] py-3 ${props.className}`}>
      {props.children}
    </section>
  );
};

export default SectionLP01;
