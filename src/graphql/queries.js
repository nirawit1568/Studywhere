/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      course {
        items {
          id
          customerID
        }
      }
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelcustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOwnCourse = /* GraphQL */ `
  query GetOwnCourse($id: ID!) {
    getOwnCourse(id: $id) {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const listOwnCourses = /* GraphQL */ `
  query ListOwnCourses(
    $filter: ModelOwnCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwnCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      price
      description
      author
      cover
      video {
        items {
          id
          courseID
          path
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        author
        cover
        video {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      courseID
      course {
        id
        title
        price
        description
        author
        cover
        video {
          nextToken
        }
        createdAt
        updatedAt
      }
      path
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseID
        course {
          id
          title
          price
          description
          author
          cover
          createdAt
          updatedAt
        }
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
