/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelcustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      course {
        items {
          id
          customerID
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelcustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      course {
        items {
          id
          customerID
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelcustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      course {
        items {
          id
          customerID
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
export const createOwnCourse = /* GraphQL */ `
  mutation CreateOwnCourse(
    $input: CreateOwnCourseInput!
    $condition: ModelOwnCourseConditionInput
  ) {
    createOwnCourse(input: $input, condition: $condition) {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const updateOwnCourse = /* GraphQL */ `
  mutation UpdateOwnCourse(
    $input: UpdateOwnCourseInput!
    $condition: ModelOwnCourseConditionInput
  ) {
    updateOwnCourse(input: $input, condition: $condition) {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const deleteOwnCourse = /* GraphQL */ `
  mutation DeleteOwnCourse(
    $input: DeleteOwnCourseInput!
    $condition: ModelOwnCourseConditionInput
  ) {
    deleteOwnCourse(input: $input, condition: $condition) {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
