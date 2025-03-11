import { Image } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
export const FilePreview = ({
  src,
  h,
}: {
  src: string;
  h?: number | string;
}) => {
  const { ref, toggle } = useFullscreen();
  return (
    <Image
      className="cursor-pointer"
      ref={ref}
      onClick={toggle}
      h={h || 60}
      alt="Attachment"
      src={src}
      fit="contain"
    />
  );
};
