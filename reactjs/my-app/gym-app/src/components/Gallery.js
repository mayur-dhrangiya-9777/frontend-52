function Gallery() {

    const photos = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500"
    ];

    return (

        <div className="container py-5">

            <h1 className="text-center mb-5">
                Gym Gallery
            </h1>

            <div className="row">

                {
                    photos.map((item, index) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={index}>

                            <img
                                src={item}
                                alt=""
                                className="img-fluid rounded shadow"
                            />

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default Gallery;