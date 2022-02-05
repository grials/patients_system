const middl = (store: any) => (next: any) => (action: any) => {
  // console.log(action.type, "esto es un middleware");
  return next(action);
};

export const middleware = [middl];
