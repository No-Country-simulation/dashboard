import React from "react";
import PropTypes from "prop-types";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
import { useParams } from "react-router";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       "& > *": {
//         margin: theme.spacing(2),
//         "&:hover": {
//           backgroundColor: ",
//         },
//       },
//     },
//     content: {
//       margin: "5px",
//       padding: "2px",
//     },
//     btn: {
//       margin: "0px",
//       padding: "0px",
//       cursor: "pointer",
//       backgroundColor: "white",
//       border: "none",
//       borderRadius: "3px",
//       marginLeft: "5px",
//     },
//     cardHeader: {
//       paddingTop: "6px",
//       paddingBottom: "2px",
//       fontSize: "20px",
//     },
//   })
// );

export default function CardDetail() {
  // const classes = useStyles();
  const { id } = useParams();

  return <div>Equipo numero: {id}</div>;
}

CardDetail.propTypes = {
  id: PropTypes.string,
};
