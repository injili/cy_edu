

export default function Videos() {
    return (
        <div>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/BurTL9J2wZs?si=k3zm9nAUC9H0bIp7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                >
                </iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/G4tfQI6hRNI?si=lc1_NXZL5ZJhNNld"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    )
}