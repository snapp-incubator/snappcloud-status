import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import LoadingButton from '@mui/lab/LoadingButton'
import {Troubleshoot} from '@mui/icons-material/'


const kindList = [
  {
    name: "Pod",
    isDisabled: false,
  },
  {
    name: "Deployment",
    isDisabled: true,
  },
  {
    name: "StatefulSet",
    isDisabled: true,
  },
  {
    name: "DaemonSet",
    isDisabled: true,
  },
  {
    name: "DeploymentConfig",
    isDisabled: true,
  },
  {
    name: "BuildConfig",
    isDisabled: true,
  },
]

const namespaceList = {
  "data": [
    {
      name: "Pod",
      isDisabled: false,
    },
    {
      name: "BuildConfig",
      isDisabled: true,
    },
  ]
}

const nameList = {
  "data": [
    {
      name: "Pod",
      isDisabled: false,
    },
    {
      name: "BuildConfig",
      isDisabled: true,
    },
  ]
}

export default async function Page() {

    let isLoading = true
    return (
    <div>
      <h1 className='App-header' >SnappCloud Portal</h1>
      <Grid container spacing={1} >
        <Grid item xs={2}>
          <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
          >
              <TextField select required id="kind-id" label="Kind" variant="outlined" defaultValue={""} onChange={handleKindChange}>
                  {
                  kindList.map((option) => (
                      <MenuItem key={option.name} value={option.name} disabled={option.isDisabled}>
                        {option.name}
                      </MenuItem>
                  ))
                  }
              </TextField>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
          >
              <TextField select required id="namespace-id" label="Namespace" variant="outlined" defaultValue={""} onChange={handleNamespaceChange}>
                {
                  namespaceList.data.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                }
              </TextField>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
          >
              <TextField select required id="name-id" label="Name" variant="outlined" defaultValue={""} onChange={handleNameChange}>
                {
                  nameList.data.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                }
              </TextField>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <LoadingButton variant="contained" loading={isLoading} id='button-id' sx={{ m:1, width: "100%", height: "75%" }} endIcon={<Troubleshoot />}  onClick={handleTshoot}>Check</LoadingButton>
        </Grid>
      </Grid>
      <h2 className='Output-app-header'>Output</h2>
      {/* <p className='Output-app'>{message}</p> */}
      {/* <p className='Output-app'>{detectedProblems}</p> */}
      <p className='footer'>
        You can check <a href='docs.snappcloud.io/'>Documents</a> of SnappCloud for more information. Also, you can reach us in <a href='google.com'>Matrix</a>.
      </p>
    </div>
);
  }
