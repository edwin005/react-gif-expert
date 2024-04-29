import { GifItem } from "./GifItem";
import { useFetchApi } from "../hooks/useFetchApi";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchApi(category);

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading && <h3>Loading...</h3>
      }
      <div className="card-grid">
        {images.map((image) => {
          return (
            <GifItem
            key={image.id}
            {...image}
            />
          );
        })}
      </div>
    </>
  );
};

// GifGrid.propTypes={
//     category: String
// }
