import React from 'react'
import {createUseStyles} from 'react-jss'

const Skills = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li><a href="/"                         className={classes.a}> Home </a></li>
                <li><a href="/"                           className={classes.a}> Portofolio     </a></li>
                <li><a href="/skills"                      className={classes.a}> Skills      </a></li>
            </ul>
        </div>

        <h1 className={classes.judul}>Skills</h1> 
        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 1. Announcer</h1>
            </div>
            <div className={classes.wrapFoto}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAABfVBMVEUnZa4fX6szbbMvarEjYq0AFz////8xbLIgYKv///0fX6wAGD+awe0jY60qZ68eXKcAVqgRWqkTPngADTiEocwYS4sAACsAh67g4uUAACkAEjvw9foChrAAGT0AVKcsLENdh78AADDU3u54mccAFDvE0ORHfbsAADTp7/Y7c7WtwNwAACMAADoDF0ODr+EAED23y+OMqtEAABwATaTi6fMYaagNS3Joj8MoLkJARVsAABpQgsB2pNpumtEAX7MAgKcAiKidstMPb5QIjbUPdpW3ucKAiZl1c4JbbY7JjDyxhVk6Z6C3h0uXe3uXfmJ/dnFKa5VudIGdr8MKWH0DGDQbGjtfXmzT0tQLOWAIUn8PZI8LeqgGKkdnfqcHKVQChriOk5UNYoIFLVYScKAKUoQHOmgKRWMAiaAIIlMMQWoVa4sKMlgKU3INd40IFlIQW48hJENLWHCqqrMAAARLUW13dY0GN3NJT1gAJ2iQk6Y6Olaqra4cGiI+QUxfW1w2QTcIAAAdaElEQVR4nO2diWPaVprAJQ6hSBZGi2tsYTCYy2CEcOLBTYFyxcl2ujO7XlLbsTukcSYZu+52kk5nuuns7N++3/ckgZ64BAhy7HytidCJfnznew89xuuaBFldJM/qxbw271uRMP/k9sFwC/yT20zcBOOze1fPjfmIuUnGZ2dXzy3Qv/bHxy1gfnSWWTk3r/DxcmP63NiVO7jBtVdlqO5x65sKKwRXjC3AD76zj4xbQBIGn33VHs5nufQywAmybNdjt7gFrR+d5VdqqQx9bdepCfnCoSAsg1uA/uirzUUk+7XdxSZ7WnutwuMnNDl3uNmxrRBcwDd8bTexCam9Vl4W/vWr337tNregTxj67KwgrYJcgOGHL+2qjwsdHfOCIEjSv/3OqnAucBv+wg1hlu7lxl/bNW5ywZMq5I/Lnt+7y83uXawqt+QMeDw1F431y99+LScyLUb+9ycucht2bLavfXnGCrXVCPfgus59+dV/CKHDhCCnUgNuPL8Qt+CkL9zQuWW5OYai5pNQGLgjt3Xuy69Ov5QPE7JQbsnGKjSxBbg5oEY+/DLcHG2iPonpC+U3XAAnPPnq98Egc5wp500FZhfiNsGx2VSOd7vu8kq0rjGU0B9sYXBffv27/2yVMymZHVCbn9s0x0aLq8YaoGoTHzMkEkVuYXA+rBeCunOTTD8wH7eRGdskERjXyAV5y7V5aRgbknO3YuVDhmsbeM95uDl0bHZyrrg5yrHxI5RtKW5OslGbixszLf6PAedb3M3RTnU8NULOeptuRFYqVM/MjW74mE0WdHN0UTWZ2pCxLmqt1LfAeGbkNrNjc5GcE8dmE+pmF9A5SndJSjobN8e5x3gJzunmqGtPcGwTyM1vrcNf/SzcpJFtD7OKNI+bo78xR7pmWit98QWVrZ+LOuc2W8Y2QWYvvaZmbBPBUdoys8rR3PvfuVNuQWkxx0bLbDnJHI6NFuras5GjDrV84Q65MW5SwxYm527O61uQGmPPSZwbK+WYqLYdR9xGN6ouRs5hCxPtHuyl6AzkrKdxqHK0P6fdsgNuc+a5U8UBObq/Z0bHZhPfrHkwFQ7sLbCMLzgRWiDoQu4xWgR+2sglOlucW9dMmSmbG8rYbNygcJxAbnnU9E8/KUDQrUULU2NmKr2sn3JU/CeGMBbcsky0L+Pb5gLUtSU3sNlbmMaXXlYTHR3CGP3Tj3RzrmVsE2VkNmcrRd2hpqOjLj7NQll+TOA32UjDjm2e1qK5ZPijed11bOPBjTBWStfGpuh9nRJs5FzNcyeL3RToUtRdaoQcnZaNV7YJhc3AFnVjDaC4UsDPIoI0IEdfm3edGsrYFibrZ5oYtKhTCLojAeirU7a+kEuDc7BeegnKNoocP+p2J/eZMwFGsBwl9F9WLsLwtZdGjbEb69CHmZaUgy6uKG7OLIuVB9PFN5acgyKQIf5shUHAsSxT2UxyYy7toIWQcAt4llwXzC7Lh4Yyyliddbzp3AKjht+9R1m2iQ5k6LYdDi4wuIF8QBq3OmxM0KZyTkcmD7h9OOBW4NksQmuc0yZ8C7fAmNtYuawUG2OtJ53/8sLKLfhhRNXVYmOs7XK8U2wUt4D7zeFzyHIqq0kyUDjnXZQUtw8iAV5hUDClf23nHZQUN3rshwBCXibL7GTow+3n0Eec6rHBumTe5GDdSJm4cbT0b3uGX2pT3ChDxSFrXn59uvAziWQ7JeOxtVkRW/FKqHbkEwaxuIeVQf0mB+tGqw4WjrOaunnpGYa/09ysMTlU4LYe725ubiY3t+F1c3tb/6MWktsH3YZVms1mJBLpdDrwT7MvEf1NBKXRfv30/sEmOcn29jdn5xy3IQ8uK29wINFMgmXkI1w8agUkX4LjUiRghDiy7jA4Ghy/sRflouXgbNx4d7md7CbDadGvqqIfJOb3qyIukXf6gqpqFzsgEV2azc7O1cvLZyDdbveyfdWAFYONkQjZd2fnqvutksbjRVEpKqdD3Paj8JeX5D0uiosFHz/gBlgQ56EgCTwjCaiW2C5rKA4cHIUjysJM3CTTwubkRv1ETP7DN2FRjBFAJi47N7+itfvcms2X3YsbTQuDpNMKvChq7+LZi0dNUD8Lt+bO807k8qaoqeSMyhffpWhu0Xw8xXEtAbhlHvgyXDTAWrm1HjB73H4oUNiQE62Ej/emWocJPXuRfOUWEy8g9Hm4zTDiZzw34V/CBih/jNAbJcq1jg1YRF5caJqiIYsYHqCqsVha09Lp2N3tZSPSJNAIYqJ0V91rTVVhX/HHN18LNLcqH9znCoSbLB9ynIfiBhtaHBfPc/sbUe5QrhJrLpiBwycJG++ZmwLYRB3bgBu9FK5EGoRF57KXC6tIS9W5qchNVP0xUdFyOe26crXTMcxUl07jRS+n4llyn9m45eUUciL65slwR0Ge1rf8HncUyqOfyySYI/CAZTBcPRgALzyM2CkJzO+HG+EjoiPSX2zvxPALnVuzq2oxv4oOD8DFdAVFpfPrCP1gs9fddgS5wX8EXrPZeKWlwRWEP+Mpbtz+PsdlfOjf0NVFN3jJym3/KIr+Dbhl8gx7zHHHIaHM7XlNCAUAj25PCuRBnJBzmVta7OvVwLH1dY6sSb8gVtfpappfUYCPX9W0XFgDeoqWBEen6Carb0hfXDb6por/PH95p6li2KZvKIANFQclJTM+KzfUsw3JB9yOBYk95KJZSWj1TVMGbMdE92AlnEd+D9zGODWrf3tBILRVRIMvmhK7qEAoJfKicnsHZooU/X6yMd3741VnwG1np/FnMW3nFj0GGAkeue0FwOh4ieJWyGY9vCQBN9gHnFk06xtwk1rkUBT2EKJxxklkXTk3UemSlOxO8WNwjCk/vmo3jLwDoGAYbVw+e3UT3kyLKgmfiiZWGhBFnhtBGJhfb9u5ZeUMtyehnWbiVfD9LOXfCjISMrj5ErA97oM9SUYnFLijfDwUIvuyoVDIibq57t/UqdwgLjQjnbbmx3CghnvtHYsuPTfRNC5v71RMBTHlA4u+ver0scHCazu3KpsHPDyJpzzE06pAx1NmwA1JcUf7xmYWTDO6D5KaqVVl5dz8Sg9jaSVHnJ1224jsNCJGukF0igQBWNxptCs3OYV4xXQ6rFYanUg/sv7pNzb/VvWB+XGp+BG3J0ssBE+PtV4YcNP9WAGo7W2QlUKG0+XwfXJLx6Y7OO0R3PiFhqqk9QxMmOeSTGPABnXr6vJCC4sqZimK1vvBAIsbrdyEQDYfhHQin/X48llwWlIgmw0G81mv7r9gvR4AgrBa7yb35PNGSQpbMYbms4H3mb/BDU7lFq50kBsmu1q7s4NVaeeq3a1Ubl/fVrrd9lWkQ2xS/7u81Yoki1a14t1lx9RMKzfWaPogzR6DtpB+KjbIyUYtkZzNcd62LH3zT+cW6zV0fYspF00C4fLVDSm1sM6CSHr3+tnLSL9M3Xn52q+QlE5JKxAg9NqB5rZ6WX0eArggg6sUMQXuov5cvSqGMZXzK3qKjHWq//pZG9TOCBiXF2GSFotq8eb75vNhffvouTmICxAZvm102kW02BdA5uo6p+kJB24zyzTQu17lSi+zIlDTX2sa2Rz2VxBb5FPj5gCbqm5WnjegMBU3kdvtZkwlqRwWp2lQWFUv82PpsFh5SVwdwGvcFpUYtrWIRQjBjU9N35zYKcbRl53bsD+2XYlE2hqWpKoogvvSxB6oGxRdaQIOygLt4vsdPYRG2j3I5rAdKqy2//T8E+PmRN9AtF7zkeaPpe/Ad2m6faaVu+7l1dXVy3a78uqmmEwjOFFRFJLxorE2bnNYmMFhve+bnxo3J/4NTDF80bwtxmJqe+ePWgzKUFG5aWOrOEnhOpHGy+6dkiZNA4qmYpUFBX2n01Wx4TL2NFx88YlxCzvjBhr3w5Wqxoq3nUsNW9PVXrvTaTY72M2gZ8CQuEEQQF3Uctffd4iT67zQNBGdXFr9bFZukrsjMd8TNzGW634fVtTio0caNnHmICPpvKxcX1/fXVQuryIE01Wlp5FaIazd6i2Yzf/qKdiG93TzM2rQvYwyEZ8USKXGVASSLM/eAfte4gJITFO7rzVVex25xu6W3KNOs/JjTgsrkLwVb25f7HQiUFO9fFXUnj6FGkR71dDBtSEFhshLcZOPMyCFjeAEcr4qx2VH4pGymUxiZnDvixvksNoPF5qa674IgxNLPoJK32/2M0DydvPHRhOLifadbqzhm5dYuj6PPMIGEnGovZdIYnwvqC87jhs21G3MPFJiOe29TriJabFyB/GyfQHgku0dtFfwXeQVAqnW64K72+k8uihiX2JM+xHAQU7SvExiBmjjFj1MtTguA1WmjC1oAEgKhVg5HiINbzys07kJMra0wTohxPJyCDeiJqZ0bjw5GEvbOBwcCgmwIk5OFg/55LgsMAwbx4NgG8vGH8jxByEyrpfxkYEE08aTu8ENg6V211PT1z/402K4cqXR20QlJ3bBViOdP6tp0m2qtvUOrs/CqjjELSsLZS4T5BOZKBfNVHlJ4qLHexxXzgPL1D63lwJuvKd1hC3mQYkvcBup/Sg2+A648akMx0XLeZ/k4faPj7hooVrmuL0s9sUeYcdOykfaivXWUXhJweajY6/He3ikN0VNBOcSNxDF3wM+d3fg62+uVM22FXTuFr1a57KI3T2xtNoAjADuTgH/Zu/Pimf3uQKP9wW09oLAjYviYlnAfhh4g9zyUW4PbvGYBW7YSx+g9E1ocUdwRIYBbnrLJuzOkW8D3mLXTlVOGb3bhBvZfJQNwgWwf6ycmDjIxi1uqFNQzItK79oP1dMPmj0WxyB4fN9EcKhxEFZ7V9haBynzELd+x4wUfPAgi2SA254cL3CcLGewIbyFdip54g8e7HFlGbhxe4ksbafw7sEDAFPlAwAhLoHGSXHshsC+2MO4vM+VQxQ3Tn5Aeh8zcMbgPrcxv506rBfsBMHVK5UbTfWL9GpRE7vo5C410jFbrKClRpoX2hA3HKpwlOL54GFmDxQhxUvY8YeDGGS9fwFQZCXhuLwHepZBbvt5QW/D7HNj83AwwEqwAaMvdk9m0TCBWzTBy2XuKE5xg5dElEsJyI05mmKm7uS9Ns3DvoZrzezsH4iq5ioArlnB4BCLFdvYINdpa0P9Wfk4qpUnG+X2+9xSvM4NB0BIAnAT0F1lDG5m72mfGy4c4cGE2zH2VZRloc9NkgvcEa1v5RDhxoCdHhZgv8lj4abUWdiLF6YFu/UIGiSh0RuIYPqCPfdiOg0RNg2vJkDxafiy83yncaORBPgWR4xEGr3kUH+WEGoBPfirxvMIArmxOje0L+xzzvLY0/BgbwQ3med57EYNxo9Hc4Nd4qB/qG9ZIR6luAUl+D64veMpOcmU/vpYbHf3c1P0xd03b75JbhMbVsK7/U2wkfz/5pvNbaKoqvoG9vwGXt7ETIsH62zvRLAcI/lJmzQB3w7FhcONFnjpIHBLJTKmvunckEcrtadzK1cPuWFuhdTGRgr3SyTG6BtEYfCQhzKoVhnDKKVvEG6Pj48TUx7UMZlbLHm2NULOT063iwAhN3Lrybs3m9i8dHdirnlrRlfVr1ygiolpHAVRfEbKhq69/1SXFAt2ykWPjih9k6r7GDQMOwVVMbgFBnkvyj72HEYhjAI3j8EtM+BG+vw9Pg8ZEJChueVJGhIteCaCm8hNfHr/J260nD8Mx2LbY7ZGn2xCtXVqvLvHvQn3XVxMa4OHu8OoEdNuwdtFOi9obqTOKh8GBIbNFjKHwkYmIUkZfIEtAsN7C5kNoZWBxOwwU6hKmZbg28i0jHGEWGeROk0SEoXyYfywnPV5M5mqJMCpWJ483RP9W6t8GPQxEp4im820ZLmVOZSFbDmT8MCXkMkA0OMF8pDY9ha583s2MLDi/MDvT5+PoQqkxM3vzJ23ti1RQ+uCV9O5KTo3Wt+Mup6ERx/+y0OOD9W6RGp2RCPASgHeSyzW8NgCwOu7E3CyfjiuhE0s7kcOFvQdZQbyt2iV7KGfywdXga8rLrMC9pyluL28wAZByxfgVnw4RO2eSe6NVvx8HDbuNOc/ODHf/HQwwBYLdyNgp37CjfTk7LzanLkdaREh3Oji1lKfejfAveWzh7DPAtxyj5EQgosaQrjhqqioJU1L7G8kW3CPtzn//aM+xKQ+pEkUVX9avdppdosqqb6wz7rTVlfOjUuM5RbIG4NjN+bPQ9Ji8sTg9u6hIY/3dW5op7pGwaK58ezcoMy9UZSnfW/3S07P3lRFK163O5Guhi1xYrJC8t5eeLXcwAWWs3TjnbU9xMtsFDKFjfwCeUha+XzrHoEUfZvM5XLwV/zi3OD204Gi6M6Pe7et6Vne/e8Mblv3/ckzQzW5rc/1NKTXu7vtNnYuX2EvYCyt3aFzi1TC/tVyM/zdOG4eD5TD0tTHhU2Mpzly73jrMczIFMhzf90yPN5ZMncW1Z3d27A+NlAtnujc7oFHM2ItvDsho278au/69evX36o5HG2dDvufYddW+w7K/BVzG0GS4uZIJnLbfGfc+t+3jaop91fDcLf+oSXf6SFjXx+Wqqra51uGvp0W/clzk9t3hnuD4gFrihh2QFxcNjqdxstXN5gif3Lc+lnIWU4L51D+8hMaJpA52dY2De06OUiHk0kw4vtnRlzY+lVDhoa8TZp1KkSG3t3F7bNn7fbLy+7rWE7D7mm6nfwT4JZ7EzW4vdlUf3379uefzx6bmcjjpLYb1bn99WD7159h489nWwa3k5wKRmxyU/WxlgQeDoPuXV/3YoqyGVZIUzoUsJ+YvkHGf8+Ine/O+xiIbW4daMW3RkKye3ay1d9GuP1cFHUTRzm/jy1L5qhqfE0r+m9lcLyveHPbbf+G/aS4JX8yct6/n3NGgDC4Rc+Sas7Yev6dEWH14EpCrSpSWa8+gN/SotTrXdx2uy++bz9q7HQ6n9r4kN1zQuYet68T0l8wEpxt+5Xclk6rr4gm2HcH6Zh/e99SOmCrkZUbaWGKQVpSqXQvQT4tbn/7RQ+OlKYBp62fHm76/eGH0XvDhWt06+QsqUAJpZoFWfQttlKKMXvrL2bBWphE2OSn5d/+9tiAcXJuQjg5PT39Of1FGBxW8rHh3t6ZG7eenJ6e7R4kMdVLnpmVw/kbjbZRs1W4T9AftsdTacyD8oaHn9pGpEq+0b/a7e82umvVXW7/fWIQOT3r+/jdZDGnkaZwLMFIu0huy9C66Nn9XFEjv43xE9dI1p8kp7W2i3ZukrfmHXX7UqJuT/SrCa/X8jZbZzwjjpSqdX03vjQSnMv+LWoAefgXQpBQ+EKN6b9ae7ql2++7vzwxFW5/V/+dGqDLnRvYIOs1hl2O52bL3yQ2WPPyvA8f/MTDyzrP4ALPryfqsJZnJYbHmZgYxrderVfzyINs5/lqLV8lP6qW4I/B35zzrLFbFhb59TUZtuHBPCPx5Dk/8AdXD5HWJ1e4yX8wsG3liv/YMhs6Trf14iD3kFDDnGPbCJ2QtyU1P9kK5Zjp+t4Wxdj432ESQ6Xb36RqqVTy1kt1vl4r1fh6aa3urZXqbK1eStSztUCtlFgvwWbQq3oJVlUlJg//yrCuWq1l69lSrRSENfl1WAv/enywW71ehQPr8lqtVIXDat6ap1rnpXxpzQO7VENrcMJSbd7f19PcWsatn2yqm09Ms4s+zIk4VmvzsR5NoWjf3t3njEj73YGKY/fV4lk/+G6GMZz2K4YR4FSKm8Cs+fKlbE0u5RFGthSq58E/lXzwLlEveRjeW5LX8mzJA3ct1+q1qiTVqnIpsObx1Kr4X0muV0teBvby8F4ZTBRWALc6nM2zlveWyA5Ay8tIpTyLfyV+TU6UHpRmeN78eG6hgunecn7t/omZom1t46g19UDPUUDFxNj2E1PhuF9y5NeTULoaKM/vkxG+g0prSNvE4i8Jq755SuveWnWttJaHO6plS/maJ18rrbGlIJ9Yq7G4LK+tMzWPVK2tJxLAjanl2Xp1bd3ghmtBZUu4VwKULF8DO62DKuJOQrBWr8N7UE+fFCx5JW+J4WuetXi1HirlnT9ufuJzCQio/YcaZPYPt+4ZGvRuG7ulPjfakB4nQcGS/ST3/Cn56cyBEVIgB97GQBEzXZw1idNbSbTkwZb19/UssyYRfWP5Upat5Wv1vFxPeEElgFsduXhKBjeLvq2XvGvreZMb6JsnxKwDyVI8URuhbzWw6JIn6zX1jXWXm45i82laVTZP+7nvaTKdLj4x9OlXeJMuDor4nw40TYl9sW9yO93ENI30pOKvUfV/jCVcziWhqrX+vp6XwEHVg8drpWAtz9fBA5XAqGo1qRSE6BkAM6yBDfNS3cNI4JKq9azEBMBFrZdYTz1L/uMTVW9pDbwgD66sXmdxt+NqEB1jrVbKgr+rB2rebL2e94B/85RK2VApVK3KdedmauPGWrmVdRJ//4Z0j37R74OJwttvDA3b+h/sOd29b/bBgFXj+3+Y7+797+5o0btcdx8+xtNa9Q0DHYmaLD5ChK0n4tUahkhMvSAL4yVcxiCJ8RQfR0LGdkGMxW4XifyH+7H6Gh9EXobXdyOBmCcLEKbhMj5chKPgWjK7vs7K8z7PwWvlJhjPkJb056Ws95/v68G3xqO5g8ZTV9b7j0vGj8by/eebT3sKi9djn1ObTq08EFM9I5NVF6UfyufkRj8fafAkHpZ+3o9lG/W0nhFvyWNSLVtZ+mzmiayXteWtPD99+KSDh+pMEkE2Zc7nI7Efgsw+rNmz5pZM7vsbx22RKcVclJm5LapvfXULCXPp2wfx+LfVPwDOkrTO87zBoXng35us9vmWlFN3PH38gJvLUxYtIqsEZ9eW2Z6nan0w/gcg0owPInMPm+DwmYMGN++C8yW6LiuiNvy0Z4dTeyE3z4fxYEtaVvGYy9HPyHY0tRcT8Hw4DzymxaW5eMbK+JkEHMxgyHiCH0j6MSzLm7UCZfID2adN7cXQjs0oG5eKY9wnJTog0RN+LAuabZJKVp9ahpqSZ/Jj8emJ5EZPT7MC4RlvoD/VmXUeRTengLJgo+7a8tQW6/qJE7VauI2fsGzJAt9tnxrODERNBrGM+YysF7dVJxanJ0wKECa34YmkVmetQ3N32eaJcxkbPRPREFR62vBxxmpwGzlZnjvzEk8TKRgY4kYa7ga7+BjX8mB6prvRv5m2PiB/HDnCbRS01RgrfN+jqCE4qu5zK5ujHPdY30mzHenmmEnYlh4gRs9LOHKiPdfno5z4XdC2PGo+yqkTgS4RmzUcjBI6x1oYm/Vs08INbc/DxspMobZEnRsOByPIUVNiL0RtumOz7U9htpNzwm0p4PjJ8/z2xaWcxDYz9hykvbNzW4KxOqQGbs47i3k5oTaDq6TzYO/s3NzVuUnhYIQsHCBs5cG8wK3G6pibi+B8IzO2SWJ1c8KM4BxkbE7JWWZVds7NLXK+2ZTNJGc9xUwaw857ZP8MVCLpnZ2bC+SwFJ1P6HLf8U0vTA2FyuZ0NzcbN9+iTZyS43gwReWckaMc4wI1x7Cbm5HbYjrnW4AaiuSoShrcLQV6sYKDum1wc7Nzmz8pWZAaIeecxDwZ28TzURowD7f5VG5ex0YJXbROoLF4OJh8zrm4zUHO5wY1IsFJo5eWSA1lcNtzcpuNnLCoY6NFsrZqjur1otP8JTwJcwFus7g5V0zUIvSsynYuboaDEcIvys0pOLepEXI+qvNmddQYI7Quws1RQ/oiGdskYeg2SHP+AMctkwsItjAtxG2qzrns2GiZloMvs9eaX5TbRHAztnvMLJMuvpyO14Esym2CsTpp0F1MguPILXeIhCvcfGNyEvcytkkyeiTVCgYeusFthLU6bQZfXKShkXvLNlEXudl99PJNdCB2lVvNBNHucLNpHD/9bl0UWuNWNK/2MritzkgNcNaLrwaba9yswWGVVopi/cHKqsaiu8bNonErxua1jLRdkZUuhduq1c3atvQxc1uxd0MZtO98fNz6n3312Pq5yMrUzUVuZmBYTaHw6XFbvXv7NLj5Zh3F8E9u/3+4/R+lh/HfvbaMRAAAAABJRU5ErkJggg==" className={classes.foto} alt="aninda" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 2. MC</h1>
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://www.pinhome.id/pinhome-home-service/wp-content/uploads/2022/02/dpamicrophones-com.jpg" className={classes.foto} alt="aninda" />
            </div>
        </div>       

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 3. UI/UX Design</h1>
            </div>
            <div className={classes.wrapFoto}>
                <img src="data:image/png;base64,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" className={classes.foto} alt="aninda" />
            </div>
        </div>   

    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#F5F5DC',
        margin: 'auto',
        color : '#F5F5DC',
        // alignItems : 'center',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #8B4513',
        width : '20%',
    },
    galleryImg : {
        width : '100%',
        height : 'auto',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : 'black',
        backgroundColor :'#F5F5DC',
    },
    wrapGallery : {
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
    },
    judul : {
        fontSize : 40,
        // marginTop : '50px',
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#8B4513',
    },
    page1 : {
        display : 'flex',
        flexDirection : 'row',

    },
    introduce : {
        fontSize : 20,
        // marginTop : '50px',
        margin: 0,
        marginLeft : '100px',
        padding: 0, 
        width : '100%',
        alignItems :'center',
        // textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#8B4513',
    },
    foto : {
        width : '100%',
        height : '100%', 
        margin: '10px',
        padding : '5px',
        border: '2px solid #8B4513 ', 
    },
    wraph1 : {
        width : '60%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '30%',
        height : '100%',       
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#F5F5DC',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#8B4513',
        padding : '16px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 20,
    },
    title : {
        float : 'left',
        color : '#8B4513',
        fontSize : 40,
        fontWeight : 'bold',
    }
})

export default Skills;