export interface ProjectDetailProps {
  className?: string;
  title: string;
  content: string;
}

const ProjectDetail = ({ className, title, content }: ProjectDetailProps) => {
  return (
    <div className={className}>
      <p className="text-xs uppercase text-[#989898] tracking-wider">{title}</p>
      <p className="uppercase font-thin">{content}</p>
    </div>
  );
};

export default ProjectDetail;
