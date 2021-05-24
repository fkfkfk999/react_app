import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "love",
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loding: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({
        error: "검색어와 일치하는 데이터가 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
