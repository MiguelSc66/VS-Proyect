// pages/dashboard.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getAllAdmins, getAllDrinks } from "@/redux/actions";
import { Container, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";


const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const admins = useSelector((state) => state.admins);
  const drinks = useSelector((state) => state.drinks);
  
  useEffect(() => {
    // Obtener la información de usuarios, administradores y tragos disponibles al cargar el panel
    dispatch(getAllUsers());
    dispatch(getAllAdmins());
    dispatch(getAllDrinks());
  }, [dispatch]);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4">Panel de Administrador</Typography>

        <div>
          <Typography variant="h6">Usuarios:</Typography>
          <List>
            {users.map((user) => (
              <ListItem key={user.id}>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))}
          </List>
        </div>

        <div>
          <Typography variant="h6">Administradores:</Typography>
          <List>
            {admins.map((admin) => (
              <ListItem key={admin.id}>
                <ListItemText primary={admin.name} secondary={admin.email} />
              </ListItem>
            ))}
          </List>
        </div>

        <div>
          <Typography variant="h6">Tragos Disponibles:</Typography>
          <List>
            {drinks.map((drink) => (
              <ListItem key={drink.id}>
                <ListItemText primary={drink.name} secondary={drink.description} />
              </ListItem>
            ))}
          </List>
        </div>
      </Paper>
    </Container>
  );
};

export default Dashboard;



