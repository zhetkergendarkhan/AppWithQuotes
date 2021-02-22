import {React, Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import _ from "lodash";
import ReactPaginate from 'react-paginate';
import DetailedRowView from "./DetailRowView/DetailedRowView";
import TodoApp from "./TodoApp";
import {Route, BrowserRouter} from "react-router-dom";
import TableSearch from "./TableSearch/TableSearch";




class App extends Component {

    state = {
        isLoading: true,
        data: [],
        sort: 'asc',  //desc
        sortField: 'id',
        row: null,
        currentPage: 0,
        search: ''
    }

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const data = await response.json();
        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })

    }


    onSort = (sortField) => {
        const clonedData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(clonedData, sortField, sort);
        this.setState({
            data,
            sort,
            sortField

        })

    }

    onRowSelect = (row) => {
        this.setState({
            row
        })
    }

    pageChangeHandler = ({selected}) => {
        this.setState({
            currentPage: selected
        })
    }

    searchHandler = (search) => {
        this.setState({
            search: search,
            currentPage: 0
        })
    }

    getFilteredData = () => {
        const {data, search} = this.state
        if (!search) {
            return data
        }
        return data.filter(item => {
            return item['title'].toLowerCase().includes(search.toLowerCase())
                /*|| item['userId'].toLowerCase().includes(search.toLowerCase())*/

        })
    }


    render() {

        const pageSize=10;

        const filteredData = this.getFilteredData()

        const pageCount = Math.ceil(filteredData.length/ pageSize)

        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]

        return (
            <BrowserRouter>

                <div className="container">

                    <Route path="/todo"><TodoApp/></Route>


                    {
                        this.state.isLoading
                            ? <Loader/>
                            :
                            <>
                                <TableSearch onSearch={this.searchHandler}/>
                                <Table data={displayData}
                                       onSort={this.onSort}
                                       sort={this.state.sort}
                                       sortField={this.state.sortField}
                                       onRowSelect={this.onRowSelect}/>
                            </>
                    }

                    {
                        this.state.data.length > 10
                            ?
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.pageChangeHandler}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-link"
                                nextClassName="page-link"
                                forcePage={this.state.currentPage}
                            />
                            : null


                    }

                    {
                        this.state.row
                            ? <DetailedRowView person={this.state.row}/>
                            : null
                    }

                </div>

            </BrowserRouter>

        );
    }
}

export default App;
