import React from "react";
import './home.css';
import Button from '@mui/material/Button';

const home = () => {
    return (
        <section>
            <Button variant="contained">Hello World</Button>;
            <h1>Informatika oktatás - érettségire felkészítés</h1>
            <h3>készülj fel az érettségire intenzív kurzusainkon</h3>
            <p>Az érettségi felkészülés alatt végigvesszük az alapoktól indulva az
                érettségi követelményeit, típusfeladatait és megcsináljuk az eddigi
                érettségi feladatsorokat. A megoldási lehetőségeket és összefüggéseket
                átnézve magabiztosan vághatsz neki az érettségi vizsgának!</p>
        </section>
    )
}

export default home