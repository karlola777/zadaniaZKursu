<?php

namespace spec\Cocoders;

use Cocoders\StringCalculator;
use PhpSpec\Exception\Exception;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

/**
 * Class StringCalculatorSpec
 * @mixin StringCalculator
 */
class StringCalculatorSpec extends ObjectBehavior
{
    //metody testujące zawsze zaczynamy od "it"
    //(w Unity od "test")
    function it_is_initializable()
    {
        $this->shouldHaveType(StringCalculator::class);
    }

    function it_returns_0_for_empty_numbers()
    {
        $this->add('')->shouldReturn(0);
    }

    function it_returns_arg_for1arg()
    {
        $this->add('0')->shouldReturn(0);
        $this->add('1')->shouldReturn(1);
        $this->add('123')->shouldReturn(123);
    }

    function it_returns_sum_of2args()
    {
        $this->add('1,2')->shouldReturn(3);
        $this->add('1,5')->shouldReturn(6);
    }

//    function it_accepts_up_to_2_numbers()
//    {
//        $this->shouldThrow(new \InvalidArgumentException())->during('add', ['1,2,3,4']);
//    }

    function it_uses_multiple_separators()
    {
        $this->add('1,5,8')->shouldReturn(14);
        $this->add('1,5\n8')->shouldReturn(14);
        $this->add('1\n5\n8')->shouldReturn(14);
    }

    function it_uses_predefined_separator()
    {
        $this->add('//s\n1s5s8')->shouldReturn(14);
    }

    function it_throws_excpt_on_negative_input()
    {
        $this->shouldThrow(new Exception('Negativity not allowed :)'))->during('add',['//s\n-1s5s8']);
        $this->shouldThrow(new Exception('Negativity not allowed :)'))->during('add',['//ą\n1ą5,-8']);
        $this->shouldThrow(new Exception('Negativity not allowed :)'))->during('add',['1,2,-5,9']);
    }

    function it_ignores_1000_or_greater()
    {
        $this->add('1000,2')->shouldReturn(2);
        $this->add('//i1024i2')->shouldReturn(2);
    }


}
