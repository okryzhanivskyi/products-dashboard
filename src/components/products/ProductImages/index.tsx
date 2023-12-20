import './styles.scss';
import Image from 'next/image';

interface Props {
  images: string[];
};

const ProductImages = ({
  images,
}: Props): React.ReactElement => (
  <div className="product-details-images">
    { images.map((imageUrl, i) => (
      <Image
        key={`product-details-images-${i}`}
        src={imageUrl}
        alt={imageUrl}
        width={200}
        height={200}
      />
    )) }
  </div>
);

export default ProductImages;
