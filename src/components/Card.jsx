import { Link } from "react-router-dom"
const Card = ({ dataPodcastToShow }) => {
  return (
    <>
      {dataPodcastToShow.map((elem) => (
        <div key={elem.id.attributes["im:id"]}>
          <div className="conatiner mx-auto mt-5 p-4">
            <Link to={`/podcast/${elem.id.attributes["im:id"]}`}>
              <div className="grid grid-cols-3">
                <img
                  alt="pic"
                  src={elem["im:image"][2].label}
                  className=" relative col-start-2 w-28 h-28 rounded-full"
                />
              </div>
              <div className="px-1 -mt-16 ">
                <div className="rounded-md shadow-xl first-letter">
                  <div className="px-6 pt-20 text-center pb-4">
                    <div className="px-6 py-4 text-center">
                      <div className="font-semibold text-md mb-2 uppercase">
                        <label>{elem["im:name"].label}</label>
                      </div>
                      <p className=" text-sm text-slate-500">
                        <label>{elem["im:name"].label}</label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
