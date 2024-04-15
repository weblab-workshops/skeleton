import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { get } from "../../utilities";
import CardDefinition from "../modules/CardDefinition.js";

const Definitions = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q");

    if (!q) {
      navigate("/");
    } else {
      get(`/api/definitions?q=${q}`).then((data) => {
        if (data) {
          setDefinition(data);
        } else {
          navigate("/NotFound");
        }
      }).catch((error) => {
        navigate("/NotFound");
      });
    }
  }, [navigate, location.search]);

  return (
    <div className="Definitions-container">
      {definition ? (
        Array.isArray(definition.Sense) ? (
          definition.Sense.map((senseItem, index) => (
            <CardDefinition
              key={index}
              wordEnglish={senseItem.TE?.["TE.TE"] || "No English word available"}
              wordWopanaak={definition["Lemma.LemmaSign"] || "No Wopanaak word available"}
              example={senseItem.Example?.['Example.Example'] || "No example available"}
              translation={senseItem.Example?.['Example.Translation'] || "No translation available"}
              source={senseItem.Example?.['Example.Source'] || "No source available"}
              etymology={definition["Lemma.Etymology"] || "No etymology available"}
            />
          ))
        ) : (
          <CardDefinition
            wordEnglish={definition.Sense.TE?.["TE.TE"] || "No English word available"}
            wordWopanaak={definition["Lemma.LemmaSign"] || "No Wopanaak word available"}
            example={definition.Sense.Example?.['Example.Example'] || "No example available"}
            translation={definition.Sense.Example?.['Example.Translation'] || "No translation available"}
            source={definition.Sense.Example?.['Example.Source'] || "No source available"}
            etymology={definition["Lemma.Etymology"] || "No etymology available"}
          />
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Definitions;
