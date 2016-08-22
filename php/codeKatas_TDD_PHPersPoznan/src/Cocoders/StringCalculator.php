<?php

namespace Cocoders;

use PhpSpec\Exception\Exception;

class StringCalculator
{
    public function add(string $numbers): int //PHP 7
    {
        $allowedSeps = array(',','\n');
        // Separator zdefiniowany za // (na pozycji 2) dorzuć do tablicy
        //jeśli jest pierwszy w numbers (pod 0),
        //a nie czy jest w ogóle (true/false)
        if (strpos($numbers, '//', '0') === 0)
        {
            $allowedSeps[] = substr($numbers, 2, 1);
        }
        $numbers = str_replace(
            //może przyjąć tablicę, zamieni z niej wszystko
            $allowedSeps,
            ',',
            $numbers
        );
        $arr = explode(',', $numbers);
        foreach ($arr as $key => $n)
        {
            if ($n < 0)
            {
                throw new Exception('Negativity not allowed :)');
            }
            if ($n >= 1000)
            {
                unset($arr[$key]);
            }
        }
      return array_sum($arr);
    }
}