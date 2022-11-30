import React from 'react';
import { Button, Form } from 'react-bootstrap';

import styles from '../../stylesheets/Jokes.module.css';
import { Joke } from '../../Types';
import { JokeEnum } from '../../Enums';

interface Props {
    jokesData: Joke[];
    dispatch: React.Dispatch<{ type: JokeEnum; payload?: Joke[] | undefined; }>;
    sortFilter: string;
    setSortFilter: React.Dispatch<React.SetStateAction<string>>;
    typeFilter: string;
    setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
    darkMode: boolean;
}

const Filter: React.FC<Props> = ({ jokesData, dispatch, sortFilter, setSortFilter, typeFilter, setTypeFilter, darkMode }) => {
    return (
        <div className={`${styles["filter"]} ${styles[darkMode ? "dm-filter" : "lm-filter"]}`}>
            <span className={styles["filter__title"]}>Filter</span>
            <div>
                <span className={styles["filter-type"]}>Type Filter</span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="type-filter" id={`jokes-only`}
                        label="Jokes Only"
                        checked={typeFilter === JokeEnum.JokesOnly}
                        disabled={typeFilter === JokeEnum.JokesOnly}
                        onClick={() => {
                                dispatch({type: JokeEnum.JokesOnly, payload: jokesData });
                                setTypeFilter(JokeEnum.JokesOnly);
                                setSortFilter("");
                            }
                        }

                    />
                </span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="type-filter" id={`puns-only`}
                        label="Puns Only"
                        checked={typeFilter === JokeEnum.PunsOnly}
                        disabled={typeFilter === JokeEnum.PunsOnly}
                        onClick={() => {
                                dispatch({type: JokeEnum.PunsOnly, payload: jokesData });
                                setTypeFilter(JokeEnum.PunsOnly);
                                setSortFilter("");
                            }
                        }
                    />
                </span>
            </div>
            <br />

            <div>
            <span className={styles["filter-type"]}>Sort Filter</span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="sort-filter" id={`best-rated`}
                        label="Sort by Best Rated" 
                        checked={sortFilter === JokeEnum.BestRated}
                        onChange={() => { 
                                dispatch({ type: JokeEnum.BestRated });
                                setSortFilter(JokeEnum.BestRated);
                            }
                        }
                    />
                </span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="sort-filter" id={`most-upvotes`}
                        label="Sort by Most Upvotes" 
                        checked={sortFilter === JokeEnum.MostUpvotes}
                        onChange={() => { 
                                dispatch({ type: JokeEnum.MostUpvotes });
                                setSortFilter(JokeEnum.MostUpvotes);
                            }
                        }
                    />
                </span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="sort-filter" id={`least-upvotes`}
                        label="Sort by Least Upvotes" 
                        checked={sortFilter === JokeEnum.LeastUpvotes}
                        onChange={() => { 
                                dispatch({ type: JokeEnum.LeastUpvotes });
                                setSortFilter(JokeEnum.LeastUpvotes);
                            }
                        }
                    />
                </span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="sort-filter" id={`most-downvotes`}
                        label="Sort by Most Downvotes" 
                        checked={sortFilter === JokeEnum.MostDownvotes}
                        onChange={() => { 
                                dispatch({ type: JokeEnum.MostDownvotes });
                                setSortFilter(JokeEnum.MostDownvotes);
                            }
                        }
                    />
                </span>
                <span className={styles["filter-span"]}>
                    <Form.Check 
                        inline type="radio" name="sort-filter" id={`least-downvotes`}
                        label="Sort by Least Downvotes" 
                        checked={sortFilter === JokeEnum.LeastDownvotes}
                        onChange={() => { 
                                dispatch({ type: JokeEnum.LeastDownvotes });
                                setSortFilter(JokeEnum.LeastDownvotes);
                            }
                        }
                    />
                </span>
            </div>

            <br />
            <Button variant="success" size="lg"
                onClick={() => {
                    setSortFilter("");
                    setTypeFilter("");
                    dispatch({type: JokeEnum.ClearFilter, payload: jokesData });
                }}
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default Filter;
