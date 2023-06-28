import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Modal from './modal';
import ModalA from './modal2';
import Modal3 from './modal3';

import Tab from '@material-ui/core/Tab';
import { getBookingsmedecin, Reservationvalidated, Annulation } from "../../actions/booking";
import { useDispatch } from 'react-redux';
import moment from "moment";
import useStyles from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RestoreIcon from '@material-ui/icons/Restore';
import Badge from '@material-ui/core/Badge';
import FileBase from 'react-file-base64';
import {getuser} from '../../actions/user';
import { confirmerprescription } from '../../actions/prescription.js';
import { ToastContainer, toast, zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Footer from '../Footer/footer';
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'firstname', numeric: true, disablePadding: false, label: 'Nom' },
  { id: 'lastname', numeric: true, disablePadding: false, label: 'Prénom' },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Numéro de téléphone' },
  { id: 'cin', numeric: true, disablePadding: false, label: 'Cin' },

  { id: 'Action', numeric: true, disablePadding: false, label: 'Verification' }

];

function EnhancedTableHead(props) {

  const {  onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const classess = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'selectionner tous les rendez vous' }}
            className={classess.colorchec}
            color={"default"}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classess.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classess: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
export default function EnhancedTable() {

  const classess = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nom');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const [infos, setinfos] = useState(JSON.parse(localStorage.getItem('profile')));
  const [Data, setData] = useState(infos);
  const [iduserm, setiduserm] = useState(Data._id);
  const [id, setid] = useState([])
  const [count, setcount] = useState(0);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [Datauser, setDatauser] = useState();
  




  const [test, settest] = React.useState(false);
  const classesss = useStyles();
  const [numberdemande, setnumberdemande] = useState();

  const dispatch = useDispatch([]);
  const handleOpen = () => {
  setid(selected);
console.log(selected,"icii");
    
    setOpen(true);
  };
  const handleOpen2 = () => {
    setid(selected);

    setOpen2(true);
  };
  const handleOpen3=()=>{
    setOpen3(true);

  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleClose2 = () => {
    setOpen2(false);
  }
  const handleClose3 = () => {
    setOpen3(false);
  }
  useEffect(() => {
   
    if (Data.Role === 'medecin') {
      dispatch(getBookingsmedecin(iduserm)).then((res) => {
        setRows(res.bookings);
        setnumberdemande(res.number);
        setcount(res.number2);

      });

    }
   
  }, [dispatch, test]);
  const Valider = () => {
    //  console.log(selected,"selec");
      dispatch(Reservationvalidated(id));
      setOpen(!open);
      window.location.reload(false);
  
    }
    console.log(id,"selec");
  
    const Annuler = () => {
      console.log(selected,"selid");
      dispatch(Annulation(id));
      window.location.reload(false);
      setOpen2(!open2);
  
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (Data.Role === 'medecin') {
      if (newValue === 0) {
        dispatch(getBookingsmedecin(iduserm)).then((res) => {
          setRows(res.bookings);
          setnumberdemande(res.number);
        });
      }
      else {
        dispatch(getBookingsmedecin(iduserm)).then((res) => {
          setRows(res.bookingsvalider);
          setcount(res.number2);


        });
      }

    }

  }
  

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => (n._id));


      setSelected(newSelecteds);

      return;

    }
    setSelected([]);
  };



  const handleClick = (event,_id) => {
    const selectedIndex = selected.indexOf(_id);

    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    const iduser = rows.map((n) => (n.iduser));
    //console.log(iduser,"idd");

    dispatch(getuser(iduser.toString())).then((res) => {
      setDatauser(res);
     // console.log(Datauser,"user");
    
      });
      
  };
 
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlechangecomment=(e)=>{
    const iduser = rows.map((n) => (n.iduser));

    setDatauser({ ...Datauser, comment: e.target.value , idmedecin:Data._id, iduser:iduser.toString()});
  }
  const Confirmer=()=>{
   /*  const iduser = rows.map((n) => (n.iduser));
    console.log(iduser.toString(),"isc"); */
    dispatch(confirmerprescription( Datauser))
    setOpen3(!open3);
  }
  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  return (
    <div className={classesss.rootr}>
      <div>
        <Paper square className={classesss.scrolbar} >
          <Tabs
            className={classesss.indicator}
            value={value}
            onChange={handleChange}
            textColor="primary"
            aria-label="disabled tabs example"
          >
           <Tab label="Demande" icon={<Badge badgeContent={numberdemande} color="error">
              <RestoreIcon />
            </Badge>} value={0} />
            <Tab label="Validée" icon={<Badge badgeContent={count} color="primary">
              <EventAvailableIcon />
            </Badge>} value={1} />
          </Tabs>
        </Paper>
      </div>
      {rows.length ===0 ? <div className={classesss.rese}> <p> Vous n'avez pas encore de réservations </p> </div>: null}
      <Paper className={classesss.paperreserv}>
        <TableContainer>
          <Table
            className={classesss.table}
          /* aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
          aria-label="enhanced table" */
          >
            <EnhancedTableHead
              classess={classess}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row._id )}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox" className={classess.bgc}>
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          className={classess.colorchec}
                          color={"default"} />
                      </TableCell>

                      <TableCell align="left" className={classess.bgc}>{row.users.firstname}</TableCell>
                      <TableCell align="left" className={classess.bgc}>{row.users.lastname}</TableCell>
                      <TableCell align="left" className={classess.bgc}>{row.phone}</TableCell>
                      <TableCell align="left" className={classess.bgc}>{row.users.cin}</TableCell>

                      {value === 0 ? <TableCell align="left" className={classess.bgc}>
                        <IconButton aria-label="valider" onClick={handleOpen} className={classess.bgc}>
                          <CheckCircleIcon fontSize="large" className={classess.icons1} /></IconButton>
                        <IconButton aria-label="anuuler" onClick={handleOpen2} className={classess.bgc}>
                          <CancelIcon fontSize="large" className={classess.icons1} /> </IconButton>
                      </TableCell> :
                        <TableCell align="left" className={classess.bgc}>
                          <IconButton aria-label="anuuler" onClick={handleOpen2} className={classess.bgc}>
                            <CancelIcon fontSize="large" className={classess.icons1} /> </IconButton>
                            <IconButton onClick={handleOpen3}>


                            <ForwardToInboxIcon fontSize="large" className={classess.icons1}></ForwardToInboxIcon>

                            </IconButton>
                        </TableCell>}


                    </TableRow>
                  );
                })}

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage='lignes par page'
        />


      </Paper>
      <Modal handleClose={handleClose} open={open} setOpen={setOpen} Valider={Valider} />
      <ModalA handleClose={handleClose2} open={open2} setOpen={setOpen2} Annuler={Annuler} />
        <Modal3 Confirmer={Confirmer} handleClose={handleClose3} open={open3} setOpen={setOpen3} handlechangecomment={handlechangecomment} comment={Datauser?.comment} setDatauser={setDatauser} Datauser={Datauser}  />
        <ToastContainer />
      <div style={{position:"absolute", bottom:0, width:"100%"}}>  <Footer /></div>
       
    </div>
  );
}