import { Helmet } from 'react-helmet-async';

import { Grid, Container } from '@mui/material';
import UserTable from './UserTable';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} marginTop={5}>
            <UserTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ApplicationsTransactions;
