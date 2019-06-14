import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import uuid from "react-native-uuid";

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";
import { addArticle, deleteAllArticles } from "../actions/articles";
import { strings } from "../locales/i18n";
import { SimpleButton } from '../components/Button'

class TestRedux extends Component {
  handleAddArticles = () => {
    console.log("Add articles");
    this.props.alertWithType(
      "info",
      strings("alerts.infoText"),
      strings("articles.addArticleText")
    );
    this.props.dispatch(
      addArticle({
        title: strings("articles.testTitle"),
        id: uuid.v1()
      })
    );
  };
  handleDeleteAllArticles = () => {
    console.log("Add articles");
    this.props.alertWithType(
      "info",
      strings("alerts.infoText"),
      strings("articles.deleteAllArticlesText")
    );
    this.props.dispatch(deleteAllArticles());
  };

  render() {
    console.log("Test Redux render");

    return (
      <Container>
        {this.props.articles.map(el => (
          <Text key={el.id}>{el.title}</Text>
        ))}
        <SimpleButton
          onPress={this.handleAddArticles}
          title={strings("articles.addArticleTitle")}
        />
        <SimpleButton
          onPress={this.handleDeleteAllArticles}
          title={strings("articles.deleteAllArticlesTitle")}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps)(connectAlert(TestRedux));
