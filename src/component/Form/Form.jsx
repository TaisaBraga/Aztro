// import React, {useState} from "react";
// import { useForm } from "react-hook-form";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import { SubmitButton } from "./styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 250,
//     },
//   },
// }));

// const Form = () => {
//   const classes = useStyles();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: { Name: "" },
//   });
  
//   return (
//     <form
//       className={classes.root}
//       onSubmit={handleSubmit((data) => {
//         console.log(data, "clicou");
//       })}
//     >
//       <div>
//         <div>
//           <label>
//             Name:
//             <TextField
//               id="outlined-size-small"
//               variant="outlined"
//               size="small"
//               {...register("Name", {
//                 required: "Please, type your name.",
//                 minLength: { value: 3, message: "Min name length is 3" },
//               })}
//             />
//             {errors.Name && (
//               <p style={{ color: "red", fontWeight: "bold", fontSize: "12px" }}>
//                 {errors.Name?.message}
//               </p>
//             )}
//           </label>
//           <div>
//             <label>
//               {" "}
//               Birth Date:
//               <TextField
//                 type="date"
//                 id="outlined-size-small"
//                 variant="outlined"
//                 size="small"
//                 {...register("BirhDate", {
//                   required: "Please, enter your birth Date.",
//                 })}
//               />
//               {errors.BirhDate && (
//                 <p
//                   style={{ color: "red", fontWeight: "bold", fontSize: "12px" }}
//                 >
//                   {errors.BirhDate?.message}
//                 </p>
//               )}
//             </label>
//           </div>
//         </div>
//         <SubmitButton type="submit" value="Verificar" />
//       </div>
//     </form>
//   );
// };

// export default Form;
