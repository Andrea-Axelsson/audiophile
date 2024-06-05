import Button from "./Button";

const ProductHighlightSpeakerGray: React.FC<staticProps> = ({ find }) => {
  return (
    <section className="mx-6 md:mx-10 lg:mx-40 mt-9 w-auto">
      <article className='bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")] md:bg-[url("/assets/home/tablet/image-speaker-zx7.jpg")] lg:bg-[url("/assets/home/desktop/image-speaker-zx7.jpg")] bg-cover bg-right h-96 flex items-center rounded-md'>
        <article className="flex flex-col justify-start items-start text-center m-6 md:m-16 lg:text-left lg:justify-start lg:items-start lg:pr-40">
          <h1 className="text-black text-40 font-bold mb-6 md:text-56">
            ZX7 SPEAKER
          </h1>
          <Button variant="border">
                SEE PRODUCT
            </Button>
        </article>
      </article>
    </section>
  );
};

export default ProductHighlightSpeakerGray;
