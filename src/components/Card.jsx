import Container from "./Container";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Heart from "/heart.svg";
import { useState } from "react";

function Cards() {
  const [pages, setPages] = useState(1);
  const { data: apiData, loading, error } = useFetch(pages);

  return (
    <Container>
      {loading && <Loading />}

      <section className="mt-32 mb-12">
        {apiData &&
          apiData.map(
            ({
              id,
              user,
              created_at,
              urls,
              alt_description,
              slug,
              likes,
              links,
            }) => (
              <div
                className="p-4 my-8 mx-auto max-w-[600px] rounded-md border-2 border-border bg-black_200"
                key={id}
              >
                {/* header area */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={user.profile_image.medium}
                        alt={user.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <span className="font-bold text-gray">Owner</span>
                      <p>{user.name}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray">Posted At</span>
                    <time className="text-gray">
                      {created_at.slice(0, 10).split("-").reverse().join("/")}
                    </time>
                  </div>
                </div>

                {/* image area */}
                <div className="my-5 rounded-md overflow-hidden sm:max-h-[400px]  max-h-[550px] max-w-full">
                  <img
                    src={`${urls.regular}`}
                    alt={slug}
                    className="object-cover max-w-full max-h-full"
                  />
                </div>

                {/* 'footer' area */}
                <article>
                  <p className="capitalize">{alt_description}</p>

                  <div className="flex items-center justify-between gap-2 mt-8">
                    <div className="flex items-center gap-3">
                      <img src={Heart} alt="Heart Icon" />
                      <span>{likes} Likes</span>
                    </div>
                    <div>
                      <Button links={links.download}>Download</Button>
                    </div>
                  </div>
                </article>
              </div>
            )
          )}
      </section>
      {error ? (
        <div className="bg-rose-300 text-rose-900 uppercase p-4 my-8 rounded-md font-bold">
          <h3>{error}</h3>
        </div>
      ) : (
        <div className="w-full h-11 flex items-center justify-center">
          <button
            onClick={() => setPages((prevPage) => prevPage + 1)}
            className="py-2 px-4 rounded-[4px] uppercase font-bold hover:bg-accent_secondary bg-accent text-black_100"
          >
            generate random photos
          </button>
        </div>
      )}
    </Container>
  );
}

export default Cards;
