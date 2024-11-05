import PropTypes from 'prop-types';

function ProductCard({title, level, duration, img, paramUrl}) {
  return (
    <>
    <a href={paramUrl}>
      <div className='flex gap-7 gap-x-10'>
    <div className="flex bg-white gap-4 w-[335px] mx-auto rounded-lg shadow-md p-4 hover:bg-[#AE4743] hover:text-white group cursor-pointer">
        <div>
          <img src={img} alt="email-marketing" className="w-28 h-20 rounded-lg"/>
        </div>
        <div className="font-sans">
          <h2 className="text-[16px] text-black font-medium group-hover:text-white">
            {title}
          </h2>
          <p className="text-sm">{level}</p>

          <div className="flex w-44 justify-between mt-3 group-hover:text-white">
            <p className="text-sm font-extralight">{duration}</p>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-[#FF4C4C] w-4 hover:scale-90 transition-all group-hover:bg-white" defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </a>
    </>
  );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    paramUrl: PropTypes.string.isRequired
  };

export default ProductCard;
