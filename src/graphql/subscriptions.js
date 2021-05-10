/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateOwnCourse = /* GraphQL */ `
  subscription OnCreateOwnCourse {
    onCreateOwnCourse {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOwnCourse = /* GraphQL */ `
  subscription OnUpdateOwnCourse {
    onUpdateOwnCourse {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOwnCourse = /* GraphQL */ `
  subscription OnDeleteOwnCourse {
    onDeleteOwnCourse {
      id
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
